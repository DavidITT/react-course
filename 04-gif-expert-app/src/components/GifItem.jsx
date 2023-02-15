export const GifItem = ({title, url, id}) => {

    return (

        <div className={'card'}>
            <img src={url} alt={title} width="100" height="auto"/>
            <p>{title}</p>
        </div>

    )
}
