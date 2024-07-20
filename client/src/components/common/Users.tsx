import { useAppContext } from "@/context/AppContext"
import { RemoteUser, USER_CONNECTION_STATUS } from "@/types/user"
import Avatar from "react-avatar"

function Users() {
    const { users } = useAppContext()

    return (
        <div className="flex min-h-[200px] flex-grow justify-center overflow-y-auto py-2">
            <div className="flex h-full w-full flex-wrap items-start gap-x-2 gap-y-6">
                {users.map((user) => {
                    return <User key={user.socketId} user={user} />
                })}
            </div>
        </div>
    )
}

const User = ({ user }: { user: RemoteUser }) => {
    const { username, status } = user
    const title = `${username} - ${status === USER_CONNECTION_STATUS.ONLINE ? "online" : "offline"}`

    return (
        <span className="relative flex flex-row items-start mx-2">
            <div className="relative flex items-center">
                <div
                    className={`absolute top-0 right-0 h-3 w-3 rounded-full ${
                        status === USER_CONNECTION_STATUS.ONLINE
                            ? "bg-green-500"
                            : "bg-danger"
                    }`}
                ></div>
                <Avatar name={username} size="50" round={"50%"} title={title} />
            </div>
            <p className="ml-2 mt-3 line-clamp-2 max-w-full text-ellipsis break-words">
                {username}
            </p>
        </span>
    )
}

export default Users
