import { User } from "../../lib/types";
import { useUserStore } from "../../stores/useUserStore";
import useAudioStore from "../../stores/useAudioStore";

export const LoginScreen = () => {
  const { users, setUser } = useUserStore();
  const { setSrc, togglePlay } = useAudioStore();

  const login = (user: User) => {
    setSrc("/sounds/startup.mp3");
    togglePlay();
    setUser(user);
  };

  return (
    <div className="text-white  h-screen">
      <div className="bg-login-bg-dark h-1/8 w-full"></div>
      <div className="bg-login-bg-light h-3/4 grid grid-cols-2">
        <div className="flex flex-col justify-center items-end px-12">
          <img className="h-25  " src="/images/LoginLogo.png" />
          <p className="py-6">To begin, click your user name</p>
        </div>
        <div className="flex flex-col justify-center border-l-1 border-white pl-4">
          {users.map((user) => (
            <div
              onClick={() => login(user)}
              key={user.name}
              className="hover:bg-login-bg-dark p-4 rounded-lg cursor-pointer flex items-center space-x-4"
            >
              <img
                src={user.image}
                alt="profile"
                className="w-20 h-20 rounded-md border-2 border-white"
              />
              <p className="text-3xl ">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-login-bg-dark h-1/8 w-full"></div>
    </div>
  );
};
