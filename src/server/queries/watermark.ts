

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 55,
  "opacity": 0.8,
  "logoUrl": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/139/website/logos/logo-domusaurea-negro.png"
};
}