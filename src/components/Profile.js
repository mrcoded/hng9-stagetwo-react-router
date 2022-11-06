import React from "react";
import {Link} from "react-router-dom"
import profile__img from "./img/profile__img.png";
import github from "./img/github.png";
import slack from "./img/slack.png";
import Icon from "./img/Icon.png";
import Icon_new from "./img/Icon_new.png";

function Profile() {
  return (
    <>
    <div className="container-fluid">
      <div>
        <img src={Icon}
           className="share_icon"
              alt="share_icon_webview"/>

        <img src={Icon_new}
           className="share_icon2"
                alt="share_icon_mobileview"/>
    </div>

      <div className="d-flex justify-content-center pt-5">

        <img id="profile__img"
         className="items-center"
          src={profile__img}
           alt="profile_image"/>

      </div>

      <h2 id="twitter">CodedLibra</h2>

      <h2 id="slack" className="mt-0">CodedLibra</h2>

      <div className="container">
      <a href="http://twitter.com/CodedLibra"
       className="btn btn-block btn-link mb-3"
       >Twitter Link</a>

      <a id="btn__zuri"
       href="https://training.zuri.team/"
        title="Want to Learn Coding/Design Better?"
        className="btn btn-block btn-link mb-3"
         >Zuri Team</a>

      <a id="books"
       href="http://books.zuri.team"
        className="btn btn-block btn-link mb-3"
        >Zuri Books</a>

      <a id="book__python"
       href="https://books.zuri.team/python-for-beginners?ref_id=CodedLibra"
        className="btn btn-block btn-link mb-3"
        >Python Books</a>

      <a id="pitch"
       href="https://background.zuri.team"
        title="Be sure not to Employ a Bad Developer"
         className="btn btn-block btn-link mb-3"
         >Background Check for Coders</a>

      <a id="book__design"
       href="https://books.zuri.team/design-rules"
        title="Take a look at the Free Design by Zuri!>"
         className="btn btn-block btn-link mb-3"
         >Design Books</a>

      <Link id="contact"
       to="/contact"
        className="btn btn-block btn-link mb-4"
         >Contact Me</Link>
    </div>

    <div className="d-flex profile_bottom justify-content-center my-3">
        <img src={slack} className="mx-3" alt="slack_icon"/>
        <img src={github} className="mx-3"alt="github_icon"/>
    </div>

    </div>
    </>
  )
}

export default Profile