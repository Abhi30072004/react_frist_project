

//frist function banaao
import './Hero.css'

const HeroSection = () =>{

    return <div className='hero'>
        <div className="left">
            <h1>YOUR FEET DESRVES THE BEST</h1>
            <h2> YOUR FEET DESRVES THE BEST AND WE ARE HERE TO HELP YOU .YOUR FEET DESRVES THE BEST SO COME JOIN WITH US T GET THE TOTALLY NEW EXPERINCED  </h2>

                <div className="buttons">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="online_sites">
                    <h3>Also Avalaible on</h3>
                    <img src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png" alt=""  height={"50px"} width={"50px"}/>
                    <img src="https://i.pinimg.com/originals/10/8f/fd/108ffd534d2076aa59babdb3b925438d.png" alt=""  height={"40px"} width={"70px"}/>
                </div>
        </div>
        <div className="right">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09a9e5c7-b352-4798-afeb-90f697d43853/blazer-mid-77-shoes-0dJRSm.png" alt="" height={"400px"} width={"350px"} />
        </div>
    </div>
}

export default HeroSection;