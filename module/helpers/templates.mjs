/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/earthland/templates/actor/parts/actor-features.html",
    "systems/earthland/templates/actor/parts/actor-items.html",
    "systems/earthland/templates/actor/parts/actor-distinctions.html",
    "systems/earthland/templates/actor/parts/actor-spells.html",
    "systems/earthland/templates/actor/parts/actor-effects.html",
    "systems/earthland/templates/partials/dice/select.html",
    "systems/earthland/templates/partials/pp.html",
    "systems/earthland/templates/partials/breadcrumbs.html",
    "systems/earthland/templates/partials/settings/actor-types.html",
    "systems/earthland/templates/partials/settings/trait.html",
    "systems/earthland/templates/partials/settings/actor-type.html",
    "systems/earthland/templates/partials/settings/value-types/dice.html",
    "systems/earthland/templates/partials/settings/value-types/sub-traits.html",
    "systems/earthland/templates/partials/settings/value-types/text.html",
    "systems/earthland/templates/partials/settings/value-types/sfx.html",
    "systems/earthland/templates/partials/settings/value-types/number.html",
    "systems/earthland/templates/partials/settings/value-types/descriptors.html",
    "systems/earthland/templates/partials/settings/trait-set.html",
    "systems/earthland/templates/partials/settings/simple-trait.html",
    "systems/earthland/templates/partials/settings/theme/border-width.html",
    "systems/earthland/templates/partials/settings/theme/background-position.html",
    "systems/earthland/templates/partials/settings/theme/body.html",
    "systems/earthland/templates/partials/settings/theme/die-colors.html",
    "systems/earthland/templates/partials/settings/theme/inputs.html",
    "systems/earthland/templates/partials/settings/theme/color.html",
    "systems/earthland/templates/partials/settings/theme/image.html",
    "systems/earthland/templates/partials/settings/theme/dice-colors.html",
    "systems/earthland/templates/partials/settings/theme/style.html",
    "systems/earthland/templates/partials/settings/theme/border-style.html",
    "systems/earthland/templates/partials/settings/theme/sections.html",
    "systems/earthland/templates/partials/settings/theme/text-transform.html",
    "systems/earthland/templates/partials/settings/theme/misc.html",
    "systems/earthland/templates/partials/settings/theme/font-style.html",
    "systems/earthland/templates/partials/settings/theme/font-size.html",
    "systems/earthland/templates/partials/settings/theme/traits.html",
    "systems/earthland/templates/partials/settings/theme/border-position.html",
    "systems/earthland/templates/partials/settings/theme/font-weight.html",
    "systems/earthland/templates/partials/settings/theme/background-repeat.html",
    "systems/earthland/templates/partials/settings/theme/background-size.html",
    "systems/earthland/templates/partials/settings/theme/button-style.html",
    "systems/earthland/templates/partials/settings/theme/opacity.html",
    "systems/earthland/templates/partials/value-types/dice.html",
    "systems/earthland/templates/partials/value-types/sub-traits.html",
    "systems/earthland/templates/partials/value-types/text.html",
    "systems/earthland/templates/partials/value-types/sfx.html",
    "systems/earthland/templates/partials/value-types/number.html",
    "systems/earthland/templates/partials/value-types/descriptors.html",
    "systems/earthland/templates/partials/reorder.html",
    "systems/earthland/templates/partials/actor-sheet/sidebar.html",
    "systems/earthland/templates/partials/actor-sheet/temporary-traits.html",
    "systems/earthland/templates/partials/actor-sheet/simple-traits.html",
    "systems/earthland/templates/partials/actor-sheet/trait-sets.html",
    "systems/earthland/templates/partials/actor-sheet/traits.html",
    "systems/earthland/templates/partials/actor-sheet/trait-set-edit.html",
    "systems/earthland/templates/partials/actor-sheet/traits-edit.html",
    "systems/earthland/templates/partials/plot-point.html",
    "systems/earthland/templates/partials/die-display.html",
    "systems/earthland/templates/partials/dice/d6.html",
    "systems/earthland/templates/partials/dice/select-options.html",
    "systems/earthland/templates/partials/dice/d12.html",
    "systems/earthland/templates/partials/dice/d8.html",
    "systems/earthland/templates/partials/dice/select.html",
    "systems/earthland/templates/partials/dice/d2.html",
    "systems/earthland/templates/partials/dice/d4.html",
    "systems/earthland/templates/partials/dice/d10.html",
    "systems/earthland/templates/partials/dice/d20.html",
    "systems/earthland/templates/partials/remove-button.html"
  ]);
};
