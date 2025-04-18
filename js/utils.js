export function formatNumber(num) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
}

export const fetchData = async (api) => {
  const req = await fetch(api);
  const res = await req.json();
  document.querySelector(".loader_wrapper").style.display = "none";
  return res;
};
