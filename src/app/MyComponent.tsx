'use client';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image'




const MyComponent = () => {
  // can use both full and shortened form ur

    const [parameterValue, setParameterValue] = useState<string>('');
    const [parameterImageValue, setParameterImageValue] = useState<string>('');

    useEffect(() => {
      const fetchRemoteConfig = async (): Promise<void> => {
        if (typeof window === 'undefined') {
          return;
        }

        try {
          const { remoteConfig } = await import('../utils/firebaseClient');
          const { fetchAndActivate, getValue } = await import('firebase/remote-config');

          // Set the minimum fetch interval to a desired value (in seconds)
          remoteConfig.settings = {
            minimumFetchIntervalMillis: 3600, // 1 hour
            fetchTimeoutMillis: 3600
          };

          // Fetch the Remote Config values
          await fetchAndActivate(remoteConfig);

          // Get the Remote Config parameter value
          const value = getValue(remoteConfig, "test").asString();

          const imageValue = getValue(remoteConfig, "image").asString();

          // Update the component state with the fetched value
          setParameterValue(value);

          setParameterImageValue(imageValue)

        } catch (error) {
          console.error("Error fetching remote config:", error);
        }
      };

      fetchRemoteConfig();

      console.log({ parameterValue })
      console.log({ parameterImageValue })
    }, []);

    // Render the fetched value
    return (
      <div>
        <Suspense fallback={<p>!!!!Loading Feed...</p>}>
          <p>
            <span>
              Remote Config Value: {parameterValue ? parameterValue : ''} + ` ` +
              {parameterImageValue
                ? <img src={parameterImageValue} alt="test" width={200} height={300} />
                : ''
              }
            </span>
          </p>
        </Suspense>
      </div>
    );
  };

  export default MyComponent;


// const [parameterValue, setParameterValue] = useState<string>('');

//   useEffect(() => {
//     const fetchRemoteConfig = async (): Promise<void> => {
//       try {
//         // Set the minimum fetch interval to a desired value (in seconds)
//         remoteConfig.settings = {
//           minimumFetchIntervalMillis: 3600, // 1 hour,
//           fetchTimeoutMillis: 3600,
//         };

//         // Fetch the Remote Config values
//         await fetchAndActivate(remoteConfig);

//         // Get the Remote Config parameter value
//         const parameterValue = getValue(remoteConfig, "parameter_name").asString();

//         // Update your component's state or props with the fetched value
//         setParameterValue(parameterValue);
//       } catch (error) {
//         console.error("Error fetching remote config:", error);
//       }
//     };

//     fetchRemoteConfig();
//   }, []);
