import ContentLoader from 'react-content-loader'
const Loading = () => {
  return (
    <>
      <ContentLoader
        speed={1}
        height="100%"
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="each-layer-wrapper"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        height="100%"
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="each-layer-wrapper"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        height="100%"
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="each-layer-wrapper"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      </ContentLoader>
    </>
  )
}
export default Loading
