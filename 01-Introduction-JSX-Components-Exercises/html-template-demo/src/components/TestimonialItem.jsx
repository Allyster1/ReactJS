export default function TestimonialItem({ content, fullName, profession }) {
   return (
      <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="team-item">
            <div className="team-content">
               <i>
                  <img src="assets/images/testimonial-icon.png" alt="" />
               </i>
               <p>{content}</p>
               <div className="user-image">
                  <img src="http://placehold.it/60x60" alt="" />
               </div>
               <div className="team-info">
                  <h3 className="user-name">{fullName}</h3>
                  <span>{profession}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
