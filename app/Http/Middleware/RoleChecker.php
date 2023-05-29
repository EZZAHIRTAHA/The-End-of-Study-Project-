<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleChecker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        $url = $request->getPathInfo();
        if ($user->role_id === 2 && (preg_match('/^users\/\d+$/', $url) || $url === '/users')) {
            
        }
        return $next($request);
    }
}
