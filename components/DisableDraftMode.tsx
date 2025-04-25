// src/components/DisableDraftMode.tsx

"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/actions/DisableDraftModeAction";
import { Button } from "./ui/button";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  
  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <Button className="m-8">
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <Button type="button" onClick={disable}>
          Disable draft mode
        </Button>
      )}
    </Button>
  );
}