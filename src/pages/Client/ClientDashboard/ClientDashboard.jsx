import { UserHero, ServicesCards } from "../../../components";
import ChatBox from "../../../components/chatbox/ChatBox";
import { userServices } from "../../../Constants/serviceList";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  return (
    <section className="text-center">
      <UserHero />
      <h1 className=" services text-center mt-5 mb-3">Our Services</h1>
      <ServicesCards services={userServices} />
      <ChatBox />
    </section>
  );
};
export default ClientDashboard;
