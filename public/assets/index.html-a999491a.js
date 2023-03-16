import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="shrepo" tabindex="-1"><a class="header-anchor" href="#shrepo" aria-hidden="true">#</a> shRepo</h1><p>This contains common helper functions</p><h2 id="importing" tabindex="-1"><a class="header-anchor" href="#importing" aria-hidden="true">#</a> Importing</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>shRepo<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@silahkosgei/sfrontend&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="runplainrequest" tabindex="-1"><a class="header-anchor" href="#runplainrequest" aria-hidden="true">#</a> <code>runPlainRequest</code></h3><p>Use to run doPost request but with a prompt for confirmation</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>shRepo<span class="token punctuation">.</span><span class="token function">runPlainRequest</span><span class="token punctuation">(</span><span class="token string">&#39;admin/departments/department/delete-department/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>isConfirmed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// success</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="runsilentrequest" tabindex="-1"><a class="header-anchor" href="#runsilentrequest" aria-hidden="true">#</a> <code>runSilentRequest</code></h3><p>Use to run doPost request <strong>WITHOUT</strong> prompt for confirmation</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>shRepo<span class="token punctuation">.</span><span class="token function">runSilentRequest</span><span class="token punctuation">(</span><span class="token string">&#39;admin/departments/department/delete-department/1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>isConfirmed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// success</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="showtoast" tabindex="-1"><a class="header-anchor" href="#showtoast" aria-hidden="true">#</a> <code>showToast</code></h3><p>shows a toast message</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>shRepo<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token string">&#39;module added successfully&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Takes the <code>message</code> and <code>type</code> in the case above a success</p><h3 id="swalerror" tabindex="-1"><a class="header-anchor" href="#swalerror" aria-hidden="true">#</a> <code>swalError</code></h3><p>Triggers a sweet alert popup with error</p><h3 id="swalsuccess" tabindex="-1"><a class="header-anchor" href="#swalsuccess" aria-hidden="true">#</a> <code>swalSuccess</code></h3><p>Triggers a sweet alert popup with success</p>`,19),o=[p];function c(i,r){return n(),a("div",null,o)}const d=s(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
