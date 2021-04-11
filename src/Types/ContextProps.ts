export default interface ContextProps {
  API_URL: string;
  authenticate: (Username: string, Password: string) => Promise<any>;
  isEmailUsed: (email: string) => Promise<boolean>
  getSession: () => Promise<any>;
  logout: () => void;
  refreshList: boolean;
  setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
  refreshBitList: () => void
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isFollowing: boolean;
  setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  currHandle: string;
  setCurrHandle: React.Dispatch<React.SetStateAction<string>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  myHandle: string;
  setMyHandle: React.Dispatch<React.SetStateAction<string>>;
  createFollowEdge: (destinationId: string) => Promise<void>;
  deleteFollowEdge: (destinationId: string) => Promise<void>;
};