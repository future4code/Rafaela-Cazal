import React from 'react'
import './Post.css'

class Post extends React.Component {
    constructor(props) {
       super();
       this.state = {iconLike: "https://svgshare.com/i/GSo.svg"}
    }


    darUmLike = () => {
        if(this.state.imagemLike === "https://svgshare.com/i/GSo.svg"){
            this.setState({
                iconLike: "https://svgshare.com/i/GSq.svg"
            })
        }else{
            this.setState({
                iconLike: "https://svgshare.com/i/GSo.svg"
            })
        }
    }


    render() {
      return(
            <section className="post-container">
               <p>{this.props.user}</p>
               <img alt="foto" src={this.props.img}/>
               <img onClick={this.darUmLike} className="icone-fav" alt="curtir" src={this.props.iconFav}/>
               <img className="icone-coment" alt="comentar" src={this.props.iconComent}/>
            </section>
      );
    }
}

export default Post; 