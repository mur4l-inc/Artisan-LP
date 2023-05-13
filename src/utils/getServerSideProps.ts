import { remoteConfig } from "../utils/firebaseClient";
import { fetchAndActivate, getValue } from 'firebase/remote-config';

export async function getServerSideProps() {
    try {
      // Set the minimum fetch interval to a desired value (in seconds)
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 3600, // 1 hour
        fetchTimeoutMillis: 3600,
      };

      // Fetch the Remote Config values
      await fetchAndActivate(remoteConfig);

      // Get the Remote Config parameter value
      const parameterValue = getValue(remoteConfig, "test").asString();

      // Pass the fetched value as a prop to your component
      return { props: { parameterValue } };
    } catch (error) {
      console.error("Error fetching remote config:", error);
      return { props: { parameterValue: "default_value" } };
    }
  }
