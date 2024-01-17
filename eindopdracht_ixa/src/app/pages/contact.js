
import { Links } from "../components/contacts";
import { FormContact } from "../components/forms";
import { ContactTitle } from "../components/shared";
import { DesContact } from "../components/description";


export default function ContactPage() {

  return (
    <>

        <section>
        <ContactTitle />
          <div className="max-w-[70rem] ml-[1rem] mr-[1rem] flex items-center w-full mx-auto">
            <div>
              <DesContact />
              <Links />
            </div>

            <div className="min-h-screen flex items-center max-w-[40rem] justify-center">
              <FormContact />
            </div>
          </div>
        </section>
    </>
  );
}
