import BounceLoader from "react-spinners/BounceLoader"

interface LoaderProps {
  loading: boolean
  color: string
}
export const Loader = ({ loading, color }: LoaderProps) => {
  return (
    <div
      className="spinner-container"
      style={{ display: loading ? "flex" : "none" }}
    >
      <BounceLoader size={50} color={color} />
    </div>
  )
}
