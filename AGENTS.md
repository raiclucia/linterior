<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store portfolio projects and their ordered galleries in `src/data/projects.ts`, importing CDN asset pointers; omit unsupported project facts so future uploads do not inherit placeholder claims.
- Use `ProjectGallery` for enlarged, keyboard-accessible project images and keep downloadable portfolio PDFs separate from source uploads so excluded content is removed before publication.
