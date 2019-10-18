import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3"
  //   params: {
  //     api_key: "e366d974f73ae203397850eadc7bce1f"
  //   }
});
