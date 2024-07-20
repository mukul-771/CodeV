import Users from "@/components/common/Users"
import { useAppContext } from "@/context/AppContext"
import { useSocket } from "@/context/SocketContext"
import useResponsive from "@/hooks/useResponsive"
import { USER_STATUS } from "@/types/user"
import toast from "react-hot-toast"
import { GoSignOut } from "react-icons/go"
import { IoShareOutline } from "react-icons/io5"
import { LuCopy } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

function UsersView() {
    const navigate = useNavigate()
    const { viewHeight } = useResponsive()
    const { setStatus } = useAppContext()
    const { socket } = useSocket()

    const copyURL = async () => {
        const url = window.location.href
        try {
            await navigator.clipboard.writeText(url)
            toast.success("URL copied to clipboard")
        } catch (error) {
            toast.error("Unable to copy URL to clipboard")
            console.log(error)
        }
    }

    const shareURL = async () => {
        const url = window.location.href
        try {
            await navigator.share({ url })
        } catch (error) {
            toast.error("Unable to share URL")
            console.log(error)
        }
    }

    const leaveRoom = () => {
        socket.disconnect()
        setStatus(USER_STATUS.DISCONNECTED)
        navigate("/", {
            replace: true,
        })
    }

    return (
        <div className="flex flex-col p-4" style={{ height: viewHeight }}>
            <h1 className="view-title font-ibm-plex-mono">Users</h1>
            {/* List of connected users */}
            <Users />
            <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex flex-row w-full gap-4">
                    {/* Share URL button */}
                    <button
                        className="flex flex-grow items-center justify-center rounded-md bg-white p-3 text-black hover:bg-green-400 "
                        onClick={shareURL}
                        title="Share Link"
                    >
                        <IoShareOutline className="animate-wiggle-icon" size={24} />
                    </button>
                    {/* Copy URL button */}
                    <button
                        className="flex flex-grow items-center  custom-button justify-center rounded-md bg-white p-3 text-black hover:bg-blue-400 "
                        onClick={copyURL}
                        title="Copy Link"
                    >
                        <LuCopy className="animate-wiggle-icon" size={22} />
                    </button>
                    {/* Leave room button */}
                    <button
                        className="flex flex-grow items-center justify-center rounded-md bg-white p-3 text-black hover:bg-red-400 "
                        onClick={leaveRoom}
                        title="Leave room"
                    >
                        <GoSignOut className="animate-wiggle-icon" size={22} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UsersView
