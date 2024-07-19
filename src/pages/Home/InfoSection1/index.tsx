import Container from "@/components/Container";
import Image from "../../../assets/IMG_20240709_145341.jpg";
import { useTranslation } from "react-i18next";

const InfoSection1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <div className="grid grid-cols-1 xl:grid-cols-2 py-10">
        <div
          className="h-100 w-100 min-h-[350px] mx-10"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="p-10" dir={i18n.dir()}>
          <div className="text-primary text-4xl font-bold">
            {t("infoSection1Heading")}
          </div>
          <div className="text-gray-800 text-lg my-5 ">
            {t("infoSection1Description")}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoSection1;
