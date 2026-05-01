import { useMemo } from "react";

import { getApiBaseUrl, hasActiveApi } from "@/services/apiBase";

/**
 * Hook central para expor a base da API ao restante do app.
 * Em vez de cada tela inventar sua própria URL, todas consultam este ponto único.
 */
export function useApiBase() {
  return useMemo(() => {
    const baseUrl = getApiBaseUrl();

    return {
      baseUrl,
      hasApi: hasActiveApi(),
      isOffline: !baseUrl,
    };
  }, []);
}

export default useApiBase;