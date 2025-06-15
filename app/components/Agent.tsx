"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Agent = ({ userName }: AgentProps) => {
  enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
  }

  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const isSpeaking = true;
  const Messages = [
    "What is your name",
    "My name  is Ratnapriya. Nice to meet you",
  ];
  const lastMessage = Messages[Messages.length - 1];

  return (
    <div className="call-view flex flex-col justify-between items-center min-h-[600px] p-6">
      {/* Cards Row */}
      <div className="flex flex-row gap-10 items-center">
        {/* AI Interviewer Card */}
        <div className="card-interviewer w-[900px]">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && (
              <span className="animate-speak absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full" />
            )}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* User Card */}
        <div className="card-border">
          <div className="card-content flex flex-col items-center gap-4">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {Messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      {/* Button at bottom */}
      <div className="w-full flex justify-center ">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call">
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />
            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </div>
  );
};

export default Agent;
