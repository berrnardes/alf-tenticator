import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type TabSwitcherProps = {
	SignUpTab: React.ReactNode;
	SignInTab: React.ReactNode;
};

export function TabSwitcher(props: TabSwitcherProps) {
	return (
		<Tabs defaultValue="account" className="w-[500px]">
			<TabsList>
				<TabsTrigger value="sign-in">Sing In</TabsTrigger>
				<TabsTrigger value="sign-up">Sing Up</TabsTrigger>
			</TabsList>
			<TabsContent value="sign-in">{props.SignInTab}</TabsContent>
			<TabsContent value="sign-up">{props.SignUpTab}</TabsContent>
		</Tabs>
	);
}
