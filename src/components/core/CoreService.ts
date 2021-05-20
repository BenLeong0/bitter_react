import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserSession } from "amazon-cognito-identity-js";
import Pool from "../../UserPool";
import Session from "../../Types/Session";

export default class CoreService {

    getSession = async (): Promise<Session> => {
        let resp: any = new Promise<Session>((resolve, reject) => {
            const user: CognitoUser | null = Pool.getCurrentUser();
            if (!user) {reject("not logged in"); return};
            user.getSession(async (err: Error, session: CognitoUserSession | null) => {
                if (err) {
                    reject();
                } else if (session) {
                    const attributes: any = await new Promise((resolve, reject) => {
                        user.getUserAttributes((
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
                        });
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
            });
        });
        return resp;
    };


    authenticate = async (Password: string): Promise<CognitoUser> => {
        const { user } = await this.getSession()
        const Username = user.username
        const cognitoUser = new CognitoUser({ Username, Pool })
        const authDetails = new AuthenticationDetails({ Username, Password });

        return await new Promise<CognitoUser>((resolve, reject) => {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: (data) => {
                  console.log("onSuccess:", user);
                  resolve(user);
                },

                onFailure: (err) => {
                  console.error("onFailure:", err);
                  reject(err);
                },

                newPasswordRequired: (data) => {
                  console.log("newPasswordRequired:", data);
                  resolve(user);
                },
            });
        });
    }


    login = async (Username: string, Password: string) =>
        await new Promise<CognitoUserSession>((resolve, reject) => {
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


    toBase64 = (file: any) => (
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
    );
}
