import React from 'react'

const BodySection2 = () => {
  return (
    <div>
      <div className="body2sub1">
        <div id="item1">
          Safe Online &amp; Offline
          House Tours!
        </div>
        <div id="item2">
          <div className="item2Heading">Online tours of property </div>
          <div className="item2Detail">Watch a video tour of the property</div>
          <img src="play-video-svgrepo-com.svg" alt="" />
        </div>
        <div id="item3">
          <div className="item2Heading">Offline tours of property </div>
          <div className="item2Detail">Take a tour of the property with our 100% vacinated staff</div>
          <img src="taxi-svgrepo-com.svg" alt="" />
        </div>
      </div>
      <div className="body2sub2">
        <div id="item4" className="item4" >Designed for everyone <br /><br /><br /><br /></div>
        <div className="item4">
          <div className="item2Heading">Homes for Families</div>
          <div className="item2Detail">
            Rent a beautiful house for your family. Choose from flats in societies, individual apartments, bungalows &amp; villas</div>
            <button>Explore houses</button>
        </div>
        <div className="item4">
          <div className="item2Heading">Homes for Friends</div>
          <div className="item2Detail">Rent a bachelor friendly house with your friends. Choose from flats in societies, individual apartments, bungalows &amp; villas</div>
          <button>Explore houses</button>
        </div>
        <div className="item4">
          <div className="item2Heading">Homes for You</div>
          <div className="item2Detail">Rent a shared room or a private room for yourself. Choose from flats in societies or individual apartments</div>
          <button>Explore houses</button>
        </div>
      </div>
    </div>
  )
}

export default BodySection2