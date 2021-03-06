import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Dropdown, Icon} from 'antd';

const photoMenu = (
    <Menu>
    <Menu.Item key="0">
         <Link className="listLinks" to = "/redmercedes">
         Red Mercedes
         </Link>
    </Menu.Item>
    <Menu.Item key="1">
         <Link className="listLinks" to = "/heebiejeebies">
         HeebieJeebies
         </Link>
    </Menu.Item>
    </Menu>
);

const filmMenu = (
    <Menu>
      <Menu.Item key = "2">
        <Link className="listLinks" to = "/caroline">
         Caroline
        </Link>
       </Menu.Item>
       <Menu.Item key = "3">
         <Link className="listLinks" to = "/myneighbor">
           My Neighbor is a Drug Dealer
         </Link>
       </Menu.Item>
       <Menu.Item key = "4">
         <Link className="listLinks" to = "/wendy">
          Wendy
         </Link>
       </Menu.Item>
       <Menu.Item key = "5">
         <Link className="listLinks" to = "/american-boyband">
         American Boyband
        </Link>
       </Menu.Item>
       <Menu.Item key = "6">
         <Link className="listLinks" to = "/helmet-boy">
         Helmet Boy Episode 4
         </Link>
       </Menu.Item>
       <Menu.Item key = "7">
         <Link className="listLinks" to = "/beauty-salon">
          Beauty Salon
          </Link>
       </Menu.Item>
   </Menu>
   );
   

class Home extends Component {

    render(){
        //Main description null
        var kinnesBio = null;
        //Photo nulls
        var currentPhoto = null;
        var photoTitle = null;
        var photoDescription = null;
        //video nulls
        var filmTitle = null;
        var filmType = null;
        var currentVideo = null;
        var productionRole = null;

        var locationChecker = this.props.location.pathname;

        switch(locationChecker){
        case "/redmercedes":
            photoTitle = <h4 className="photoTitle">AMINÉ - REDMERCEDES</h4>;
            photoDescription = <h4 className="photoDescription">SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458553/b2fcba2db9cc8eace656aa81500c005e.1000x936x1_leg1om.jpg" className= "currentPhoto" alt="Red Mercedes Cover" />;
            break;
        case "/heebiejeebies":
            photoTitle = <h4 className = "photoTitle">AMINÉ FEAT. KEHLANI - HEEBIEJEEBIES</h4>; 
            photoDescription = <h4 className = "photoDescription">SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458549/akeemofzamunda-amine-kehlani-heebiejeebies-0_rzl3bz.jpg" className="currentPhoto" alt="HeebieJeebies Cover"/>;
            break;
        case "/caroline":
            filmTitle = <h4 className = "filmTitle">AMINÉ - CAROLINE</h4>;
            filmType = <h4 className = "filmType">MUSIC VIDEO</h4>;
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/3j8ecF8Wt4E?rel=0" frameBorder="0" title="caroline" allowFullScreen></iframe>;
            productionRole = <h4 className = "productionRole">CREATIVE DIRECTION & WRITING</h4>
            break;
        case "/myneighbor":
            filmTitle = <h4 className = "filmTitle">BEAGLES - MY NEIGHBOR IS A DRUG DEALER</h4>;
            filmType = <h4 className = "filmType">MUSIC VIDEO</h4>
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/j3PqNsHPvQg?rel=0" frameBorder="0" allowFullScreen title="beagles"></iframe>;
            productionRole = <h4 className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY</h4>
            break;
        case "/wendy":
            filmTitle = <h4 className = "filmTitle">RICHIE WOODS - WENDY</h4>;
            filmType = <h4 className = "filmType">MUSIC VIDEO</h4>
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/CMNa2xlG3GQ?rel=0" frameBorder="0" allowFullScreen title="wendy"></iframe>;
            productionRole = <h4 className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY</h4>;
            break;
        case "/american-boyband":
            filmTitle = <h4 className = "filmTitle">AMERICAN BOYBAND with Kevin Abstract</h4>;
            filmType = <h4 className = "filmType">VICELAND Series</h4>;
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/DBDhBeG1tJY?rel=0" frameBorder="0" title="american-boyband" allowFullScreen></iframe>
            productionRole = <h4 className = "productionRole">CAST & ADDITIONAL PHOTOGRAPHY</h4>
            break;
        case "/helmet-boy":
            filmTitle = <h4 className = "filmTitle">HELMET BOY EPISODE 4</h4>;
            filmType = <h4 className = "filmType">MINI-SERIES</h4>;
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/YyPxFav9Tg8?rel=0" frameBorder="0" title="helmet_boy" allowFullScreen></iframe>;
            productionRole = <h4 className = "productionRole">DIRECTOR</h4>
            break;
        case "/beauty-salon":
            filmTitle = <h4 className = "filmTitle">FOX ACADEMY - BEAUTY SALON</h4>;
            filmType = <h4 className = "filmType">MUSIC VIDEO</h4>;
            currentVideo = <iframe className = "currentVideo" src="https://www.youtube.com/embed/FVW3XfDmcsw?rel=0" frameBorder="0" allowFullScreen title="beauty_salon"></iframe>
            productionRole = <h4 className = "productionRole">DIRECTOR & DIRECTOR OF PHOTOGRAPHY</h4>
            break;
        default:
            kinnesBio = <p className = "kinnesBio"><b>A 21 year old American visual artist and writer based in Portland, Oregon.</b></p>
            break;
        }


        return (
            <div>
            <h1 className="title">Brian Kinnes</h1>
             <div className = "divider">
               </div>
                {/* Photography Menu */}
                <div className="responsiveHead">
                <Dropdown className="responsiveHead" overlay = {photoMenu}>
                <a className = "ant-dropdown-link">
                    Photo <Icon type = "down" />
                </a>
                </Dropdown>
                <div className = "divider">
                </div>
                {/* Film Menu */}
                <Dropdown overlay = {filmMenu}>
                <a className = "ant-dropdown-link" trigger={['click']}>
                    Film <Icon type = "down" />
                </a>
                </Dropdown>
            {/* Final Container */}
            <ul className="responsiveList">
               <li><a className="link responsiveOther" href="http://blog.briankinn.es">Blog</a></li>
               <li><a className="link responsiveOther" href="http://store.briankinn.es">Store</a></li>
               <li><a className="link responsiveOther" href="mailto:contact@briankinn.es">Contact</a></li>
            </ul>
            </div>
            {/* Default Kinnes Bio */}
            {kinnesBio}
            {/* Photography Section Info */}
            {currentPhoto}
            {photoTitle}
            {photoDescription}
            {/* Film Section Info*/}
            {currentVideo}
            {filmTitle}
            {filmType}
            {productionRole}
            </div>
        )
    }
}

export default Home;