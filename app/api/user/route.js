// app/api/user/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(req) {
    try {
        const body = await req.json();

        const { data, error } = await supabase
            .from('users')
            .upsert(body, { onConflict: 'id' });

        if (error) throw error;

        return NextResponse.json({ message: 'User data updated successfully', user: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error updating user data', error: error.message }, { status: 500 });
    }
}