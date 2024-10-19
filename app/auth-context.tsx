// app/auth-context.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/supabaseClient";

interface SupabaseContext {
	user: User | null;
}

const Context = createContext<SupabaseContext | undefined>(undefined);

export const SupabaseProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();


	useEffect(() => {
		const getUser = async () => {
			const { data, error } = await supabase.auth.getUser();
			if (error || !data?.user) {
				router.push("/login");
			} else {
				setUser(data.user);
			}
		};

		getUser();
	}, [router]);

	return <Context.Provider value={{ user }}>{children}</Context.Provider>;
};

export const useSupabase = () => {
	const context = useContext(Context);
	if (context === undefined) {
		throw new Error("useSupabase must be used within a SupabaseProvider");
	}
	return context;
};
