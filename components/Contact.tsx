import Contact_cli from "./client_comp/Contact_cli";
import Contact_Social from "./Contact_Social";

export default function Contact() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left column: Text and social */}
        <Contact_Social />
        {/* Right column: Contact form */}
        <Contact_cli />
      </div>
    </div>
  );
}
