const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export function getImageUrl(imagePath) {
  if (!imagePath) return '';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
}