import { ReactNode, HTMLAttributes } from "react";

export const TitleBar = ({
  isFocused,
  children,
  className,
  ...props
}: {
  isFocused: boolean;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  const background = isFocused
    ? "bg-[linear-gradient(to_bottom,#0058ee_0%,#3593ff_4%,#288eff_6%,#127dff_8%,#036ffc_10%,#0262ee_14%,#0057e5_20%,#0054e3_24%,#0055eb_56%,#005bf5_66%,#026afe_76%,#0062ef_86%,#0052d6_92%,#0040ab_94%,#003092_100%)]"
    : "bg-[linear-gradient(to_bottom,#7697e7_0%,#7e9ee3_3%,#94afe8_6%,#97b4e9_8%,#82a5e4_14%,#7c9fe2_17%,#7996de_25%,#7b99e1_56%,#82a9e9_81%,#80a5e7_89%,#7b96e1_94%,#7a93df_97%,#abbae3_100%)]";

  return (
    <div className={`${background} p-1 rounded-t-lg ${className}`} {...props}>
      {children}
    </div>
  );
};
