import TestimonialItem from "./TestimonialItem.jsx";

export default function Testimonials() {
   return (
      <section className="section" id="testimonials">
         <div className="container">
            {/* ***** Section Title Start ***** */}
            <div className="row">
               <div className="col-lg-12">
                  <div className="center-heading">
                     <h2 className="section-title">What do they say?</h2>
                  </div>
               </div>
               <div className="offset-lg-3 col-lg-6">
                  <div className="center-text">
                     <p>
                        Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a
                        turpis. Ut sagittis lectus libero.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <TestimonialItem
                  content="Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio."
                  fullName="Catherine Soft"
                  profession="Managing Director"
               />

               <TestimonialItem
                  content="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
                  fullName="Kelvin Wood"
                  profession="Digital Marketer"
               />

               <TestimonialItem
                  content="Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam."
                  fullName="David Martin"
                  profession="Website Manager"
               />
            </div>
         </div>
      </section>
   );
}
