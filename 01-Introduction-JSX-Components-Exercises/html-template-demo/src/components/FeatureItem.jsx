export default function FeatureItem(props) {
   return (
      <div
         className="col-lg-4 col-md-6 col-sm-6 col-12"
         data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
      >
         <div className="features-small-item">
            <div className="icon">
               <i>
                  <img src={props.image} alt="" />
               </i>
            </div>
            <h5 className="features-title">{props.title}</h5>
            <p>{props.content}</p>
         </div>
      </div>
   );
}
