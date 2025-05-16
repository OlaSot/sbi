import { getDictionary } from "@/i18n/getDictionary";
import ModalForm from "../ui/ModalForm";

export default async function ModalFormWrapper({
  isOpen,
  onClose,
  lang,
}: {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}) {
  const dict = await getDictionary(lang);
  const cta = dict.cta;

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      translated={{
        title: cta.title,
        description: cta.description,
        namePlaceholder: cta.namePlaceholder,
        phonePlaceholder: cta.phonePlaceholder,
        messagePlaceholder: cta.messagePlaceholder,
        button: cta.button,
        sending: cta.sending,
        successMessage: cta.successMessage,
      }}
    />
  );
}
