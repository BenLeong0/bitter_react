import React, { createContext, useState, useEffect } from "react";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import Pool from "../UserPool";
import HttpService from "./core/HttpService";

// type ContextProps = {
//   authenticate: (Username: string, Password: string) => Promise<any>;
//   isEmailUsed: (email: string) => Promise<boolean>
//   getSession: () => Promise<any>;
//   logout: () => void;
//   refreshList: boolean;
//   setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
//   refreshBitList: () => void
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
//   isFollowing: boolean;
//   setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
//   currHandle: string;
//   setCurrHandle: React.Dispatch<React.SetStateAction<string>>;
//   isAdmin: boolean;
//   setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
//   myHandle: string;
//   setMyHandle: React.Dispatch<React.SetStateAction<string>>;
//   createFollowEdge: (destinationId: string) => Promise<void>;
//   deleteFollowEdge: (destinationId: string) => Promise<void>;
// };

interface Props {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  myHandle: string;
  setMyHandle: React.Dispatch<React.SetStateAction<string>>;
  children: any;
}

const AccountContext = createContext<any>(undefined);

const Account: React.FC<Props> = ({
  isLoggedIn,
  setIsLoggedIn,
  myHandle,
  setMyHandle,
  children,
}) => {
  const httpService = new HttpService();

  // Info about current user being viewed, i.e. owner of /u/handle
  const [currHandle, setCurrHandle] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  // Hook to refresh timeline after posting
  const [refreshList, setRefreshList] = useState<boolean>(true);

  useEffect(() => {
    getSession()
      .then((session: any) => {
        if (session["custom:role"] === "admin") setIsAdmin(true);
        setIsLoggedIn(true);
        setMyHandle(session.user.username);
      })
      .catch((err) => {
        setMyHandle("");
        setIsAdmin(false);

        return;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSession = async (): Promise<any> =>
    await new Promise((resolve, reject) => {
      const user: CognitoUser | null = Pool.getCurrentUser();
      if (user) {
        user.getSession(
          async (err: Error, session: CognitoUserSession | null) => {
            if (err) {
              reject();
            } else if (session) {
              const attributes: any = await new Promise((resolve, reject) => {
                user.getUserAttributes(
                  (
                    err: Error | undefined,
                    attributes: CognitoUserAttribute[] | undefined
                  ) => {
                    if (err) {
                      reject(err);
                    } else if (attributes) {
                      const results: any = {};

                      for (let attribute of attributes) {
                        const { Name, Value } = attribute;
                        results[Name] = Value;
                      }

                      resolve(results);
                    }
                  }
                );
              });

              const token = session.getIdToken().getJwtToken();

              resolve({
                user,
                headers: {
                  Authorization: token,
                  "x-api-key": attributes["custom:apikey"],
                },
                ...session,
                ...attributes,
              });
            }
          }
        );
      } else {
        reject("Not logged in");
      }
    });

  const createFollowEdge = async (destinationHandle: string) => {
    let res = `/users/follow`;
    let body = { handle: destinationHandle };
    let resp: any = await httpService.makePostRequest(res, body);

    if (resp.code === "followSuccess") {
      console.log(resp);
    } else {
      console.error(resp);
    }
  };

  const deleteFollowEdge = async (destinationHandle: string) => {
    let res = `/users/follow`;
    let body = { handle: destinationHandle };
    let resp: any = await httpService.makeDeleteRequest(res, body);

    if (resp.code === "unfollowSuccess") {
      console.log(resp);
    } else {
      console.error(resp);
    }
  };

  const authenticate = async (Username: string, Password: string) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess:", data);
          resolve(data);
        },

        onFailure: (err) => {
          console.error("onFailure:", err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          console.log("newPasswordRequired:", data);
          resolve(data);
        },
      });
    });

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setMyHandle("");
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  };

  const isEmailUsed = async (email: string): Promise<boolean> => {
    let res = `/users/exists?email=${email}`;
    let resp: any = await httpService.makeGetRequest(res);

    console.log(resp);
    return resp;
  };

  const refreshBitList = () => {
    setRefreshList(!refreshList);
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        isEmailUsed,
        getSession,
        logout,
        refreshList,
        setRefreshList,
        refreshBitList,
        isLoggedIn,
        setIsLoggedIn,
        isFollowing,
        setIsFollowing,
        currHandle,
        setCurrHandle,
        isAdmin,
        setIsAdmin,
        myHandle,
        setMyHandle,
        createFollowEdge,
        deleteFollowEdge,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
