<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'prename' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'role' => 'in:admin,employeer'
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'prename' => $validated['prename'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['admin'] ?? 'employeer',
        ]);

        return response()->json([
            'message' => 'Utilisateur creer avec succés',
            'user' => $user
        ],201);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'erreur'], 401);
        }

        return response()->json([
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'se deconnecter']);
    }

    public function getAuthUser(Request $request) {
        return response()->json($request->user());
    }

}
