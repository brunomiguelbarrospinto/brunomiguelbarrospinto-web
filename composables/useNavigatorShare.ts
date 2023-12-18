import { useShare } from "@vueuse/core";

const { share, isSupported } = useShare();

function useNavigatorShare() {
  async function startShare({
    title,
    text,
    url,
    files,
  }: {
    title: string;
    text: string;
    url: string;
    files: File[];
  }) {
    share({
      title,
      text,
      url,
      files: files,
    });
  }

  return {
    startShare,
    isSupported,
  };
}

export default useNavigatorShare;
