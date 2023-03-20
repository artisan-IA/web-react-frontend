import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const InfoDemo = () => {

    const { user, isLoading } = useAuth();

    return (
        <>
            {!isLoading && <section id="demo">
                <div className="background-clear"></div>
                <div className="demo-work">
                    {!user && <Link to={'/login'} className="orange-button login">Log in</Link>}
                    {user && <p>Hello {user.username}</p>}
                    <h4>We are working on our demo.</h4>
                    <p>Important! Please read.</p>
                    <p>If we have given you an username and password you can press the button on top to log in and see the early access demo.</p>
                    <p className="light-font">If you want to get credentials to see the demo, please write us in the contact mail</p>
                    <a href="/demo/show" className="orange-button">See the demo</a>
                </div>
            </section>}                
        </>

    )
}

export default InfoDemo