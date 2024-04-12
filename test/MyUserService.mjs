import { loadServices, getServices, setAuthToken } from "react-kichiri";
import api from "./api.mjs";

loadServices({
	apiDoc: api,
	host: "http://localhost:3001/api"
});

const { UserService } = getServices();

const MyUserService = {

	async signOut() {
		console.log("signMeOut");
	}

}

export default { ...MyUserService, ...UserService };



