const url = "https://api.warpcast.com/v2/follows";
const bearerToken = "MK-YOUR-TOKEN-HERE"
// read more: https://warpcast.notion.site/Warpcast-v2-API-Documentation-c19a9494383a4ce0bd28db6d44d99ea8#c8290028e8f64238bdd2db8938b29b9b

const fids = [14127, 14141, 14069, 14131, 14150];

const makeRequest = (fid) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      targetFid: fid,
    }),
  };

  return fetch(url, requestOptions);
};

const promises = fids.map((fid) => makeRequest(fid));

Promise.all(promises).then(() => {
  console.log("All requests completed successfully.");
});
