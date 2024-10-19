"use client";

import { useRouter } from "next/navigation";
import { SupabaseProvider, useSupabase } from "./auth-context";
import { supabase } from "@/lib/supabase/supabaseClient";

export default function HomePage() {
	const router = useRouter();
	const data = useSupabase();

	// ログアウト関数
	async function signOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			throw `supabase something went wrong ${error.message}`;
		}
		router.push("/login");
	}

	const handleMoveProtected = () => {
		router.push("/protected");
	};

	return (
		<div>
			<h1>ホームページ</h1>
			<p>{data.user?.email}</p>
			<button onClick={signOut}>ログアウト</button>
			<button onClick={handleMoveProtected}>プロテクテッド</button>
		</div>
	);
}
