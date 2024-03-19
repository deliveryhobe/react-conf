import { AnimatePresence, motion } from "framer-motion";
import ConferenceCardDetails from "./ConferenceCardDetails";
import { cn } from "@/libs/utils";

const ConferenceCard = ({
  item,
  isSelected = false,
  onSelect,
}: {
  item: string;
  onSelect: () => void;
  isSelected?: boolean;
}) => {
  return (
    <div className="w-full">
      <button
        className={cn(
          "p-2 rounded-lg flex items-center gap-11 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          isSelected
            ? "bg-secondary text-white mb-6 sm:mb-10"
            : "bg-white text-primary mb-10"
        )}
        onClick={onSelect}
      >
        <div className="h-14 w-14 rounded-lg bg-white flex justify-center items-center">
          <svg width="29" height="26" viewBox="0 0 29 26" fill="none">
            <path
              d="M22 24L17 19.1111M7 2V24V2ZM7 2L12 6.88889L7 2ZM7 2L2 6.88889L7 2ZM22 24V2V24ZM22 24L27 19.1111L22 24Z"
              stroke="#FFC93E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg font-bold text-current">{item}</p>
      </button>
      <div className="block sm:hidden overflow-hidden">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: "0px" }}
              animate={{ opacity: 1, height: "auto", marginBottom: "24px" }}
              exit={{ opacity: 0, height: 0, marginBottom: "0px" }}
            >
              <ConferenceCardDetails />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ConferenceCard;
