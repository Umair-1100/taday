import { X } from "../../icons/Index"
import Button from "./Button"

const Modal = ({ children, onClose , name }) => {
    return (
        <div onClick={onClose} className="transition flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/30">
            <div onClick={(e) => e.stopPropagation()} className="w-lg bg-white rounded-sm">
                <div className=" border-b border-gray-100  p-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">{name}</h3>
                    <Button
                        icon={<X className={"cursor-pointer size-5.5 transition hover:rotate-180"} />}
                        className={"!p-0"}
                        onClick={onClose}
                    />
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
