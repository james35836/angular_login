<?php

namespace App\Http\Middleware;

use App\Article;
use Closure;
use Illuminate\Contracts\Auth\Guard;

class MemberMiddleware
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()->type == "member")
        {
            return $next($request);
        }
        else
        {
            return response()->json('Unauthorized action.', 403);
        }
    }
}