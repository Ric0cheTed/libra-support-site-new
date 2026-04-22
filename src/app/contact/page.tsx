import { ContactPageTemplate } from "@/components/contact/ContactPageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { ContactForm } from "./contact-form";
import { contactContent } from "@/content/contact";
import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(contactContent.metadata);

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />
      <ContactPageTemplate
        content={contactContent}
        mapEmbedUrl={BUSINESS_PROFILE.map.embedUrl}
        form={<ContactForm />}
      />
      <MobileStickyCallBar />
    </>
  );
}
