import FeatureItem from "./FeatureItem.jsx";

export default function Component() {
   return (
      <section className="section home-feature">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="row">
                     <FeatureItem
                        title="Modern Strategy"
                        content="Customize anything in this template to fit your website needs"
                        image="assets/images/featured-item-01.png"
                     />

                     <FeatureItem
                        title="Best Relationship"
                        content="Contact us immediately if you have a question in mind"
                        image="assets/images/featured-item-01.png"
                     />

                     <FeatureItem
                        title="Ultimate Marketing"
                        content="You just need to tell your friends about our free templates"
                        image="assets/images/featured-item-01.png"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
