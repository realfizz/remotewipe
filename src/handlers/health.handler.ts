export const healthHandler = () => ({
  status: "ok",
  timestamp: new Date().toISOString(),
  // uptime: Math.floor(process.uptime()), 
});