<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        if ($user->role === 'admin') {
            return Product::with(['user', 'category'])->get();
        }

        return $user->products()->with('user')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|string',
            'status' => 'in:disponible,en rupture'
        ]);

        $product = $request->user()->products()->create($validated);
        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $user = $request->user();

        $product = $user->role === 'admin' ? Product::find($id) : $user->products()->find($id);

        if (!$product) {
            return response()->json(['message' => 'accés refusé'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|string',
            'status' => 'in:disponible,en rupture'
        ]);

        // dd($product);
        $product->update($validated);
        return response()->json($product);
    }

    public function destroy(Request $request, $id)
    {
        $user = $request->user();

        $product = $user->role === 'admin' ? Product::find($id) : $user->products()->find($id);

        if (!$product) {
            return response()->json(['message' => 'Produit non autorisé'], 404);
        }

        $product->delete();
        return response()->json(['message' => 'Produit supprimé avec succès']);
    }

}
