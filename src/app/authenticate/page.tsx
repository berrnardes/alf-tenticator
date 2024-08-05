import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { TabSwitcher } from "@/components/tab-switcher";

const AuthenticatePage = () => {
	return (
		<div className="relative flex w-full h-screen bg-background">
			<div className="max-w-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<TabSwitcher SignInTab={<SignInForm />} SignUpTab={<SignUpForm />} />
			</div>
		</div>
	);
};

export default AuthenticatePage;
